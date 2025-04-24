import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Video, AlertCircle, Earth } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface FormErrors {
  date?: string;
  time?: string;
  timeZone?: string;
  name?: string;
  email?: string;
}
export function BookingDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Generate available time slots (9 AM to 5 PM, 30-min intervals)
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  }, []);
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!selectedDate) {
      newErrors.date = "Please select a date";
    }
    if (!selectedTime) {
      newErrors.time = "Please select a time";
    }
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }
    try {
      // Handle form submission here
      // Add your API call or submission logic
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const overlayVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const dialogVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };
  // Get today's date at midnight for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-[#0a0a1a] border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-lg mx-4"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Book a Strategy Call</h2>
              <button
                onClick={onClose}
                className=" cursor-pointer text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="bg-white/5 rounded-lg p-4 mb-6 flex items-center gap-3">
              <Video className="text-[#ff3366]" />
              <div>
                <h3 className="font-medium">30-Minute Zoom Meeting</h3>
                <p className="text-sm text-gray-400">
                  {`We'll send you the Zoom link after booking`}
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Date
                </label>
                <div className="relative datepicker-wrapper">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => {
                      setSelectedDate(date);
                      setErrors({
                        ...errors,
                        date: undefined,
                      });
                    }}
                    minDate={today}
                    placeholderText="Select a date"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all text-white ${
                      errors.date ? "border-red-500" : "border-white/10"
                    }`}
                    dateFormat="MMMM d, yyyy"
                    wrapperClassName="w-full"
                    popperClassName="datepicker-popper"
                    calendarClassName="datepicker-calendar"
                  />
                  <Calendar
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={20}
                  />
                </div>
                {errors.date && (
                  <div className="flex items-center gap-1 mt-1.5 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.date}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time Zone
                </label>
                <div className="relative">
                  <select
                    value={selectedTimezone}
                    onChange={(e) => {
                      setSelectedTimezone(e.target.value);
                      setErrors({
                        ...errors,
                        timeZone: undefined,
                      });
                    }}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all appearance-none text-white ${
                      errors.timeZone ? "border-red-500" : "border-white/10"
                    }`}
                  >
                    {Intl.supportedValuesOf("timeZone").map((time) => (
                      <option className=" text-black" key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <Earth
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                {errors.time && (
                  <div className="flex items-center gap-1 mt-1.5 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.time}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Time (30min)
                </label>
                <div className="relative">
                  <select
                    value={selectedTime}
                    onChange={(e) => {
                      setSelectedTime(e.target.value);
                      setErrors({
                        ...errors,
                        time: undefined,
                      });
                    }}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all appearance-none text-white ${
                      errors.time ? "border-red-500" : "border-white/10"
                    }`}
                  >
                    <option value="" className=" text-black">
                      Select a time
                    </option>
                    {timeSlots.map((time) => (
                      <option className=" text-black" key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <Clock
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                {errors.time && (
                  <div className="flex items-center gap-1 mt-1.5 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.time}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({
                      ...errors,
                      name: undefined,
                    });
                  }}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all text-white ${
                    errors.name ? "border-red-500" : "border-white/10"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <div className="flex items-center gap-1 mt-1.5 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({
                      ...errors,
                      email: undefined,
                    });
                  }}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c6cff] focus:border-transparent transition-all text-white ${
                    errors.email ? "border-red-500" : "border-white/10"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <div className="flex items-center gap-1 mt-1.5 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                }}
                whileTap={{
                  scale: isSubmitting ? 1 : 0.98,
                }}
                className={` cursor-pointer w-full px-6 py-3 bg-gradient-to-r from-[#ff3366] to-[#ff3366]/80 text-white rounded-lg font-medium transition-all ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:shadow-lg hover:shadow-[#ff3366]/20"
                }`}
              >
                {isSubmitting ? "Booking..." : "Confirm Booking"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
