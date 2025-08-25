'use client';
import React, { useState } from 'react';
import { Calendar, ChevronDown, Send } from 'lucide-react';

interface FormData {
  fullName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  sports: string;
  sportsClub: string;
  position: string;
  trainingGoals: string;
  preferredTrainingDays: string;
  additionalMessage: string;
}

interface FormErrors {
  fullName?: string;
  dateOfBirth?: string;
  email?: string;
  phoneNumber?: string;
  sports?: string;
  sportsClub?: string;
  position?: string;
  trainingGoals?: string;
  preferredTrainingDays?: string;
  additionalMessage?: string;
}

interface BookingFormProps {
  packageId: number;
  packageTitle: string;
}

export default function BookingForm({ packageId, packageTitle }: BookingFormProps): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    sports: '',
    sportsClub: '',
    position: '',
    trainingGoals: '',
    preferredTrainingDays: '',
    additionalMessage: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validate = (): FormErrors => {
    let newErrors: FormErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required.';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.sports) newErrors.sports = 'Sports selection is required.';
    if (!formData.trainingGoals) newErrors.trainingGoals = 'Training Goals selection is required.';
    if (!formData.preferredTrainingDays) newErrors.preferredTrainingDays = 'Preferred Training Days is required.';
    return newErrors;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear the error for the field once the user starts typing
    if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          packageId,
          packageTitle,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          dateOfBirth: '',
          email: '',
          phoneNumber: '',
          sports: '',
          sportsClub: '',
          position: '',
          trainingGoals: '',
          preferredTrainingDays: '',
          additionalMessage: '',
        });
        setErrors({});
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-600 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-none text-lg";
  const labelClass = "block text-lg font-medium text-black mb-2";
  const errorClass = "text-red-500 text-sm mt-1";
  const selectClass = "w-full px-4 py-3 border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none rounded-none text-lg";

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-wxl bg-white p-6 px-4 md:p-16  border border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="md:text-2xl text-xl font-semibold text-black">Complete Your Profile</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={inputClass}
              />
              {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
            </div>

            <div>
              <label className={labelClass}>Date of Birth</label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className={`${inputClass} pr-12`}
                />
                <Calendar className="absolute right-4 top-3.5 w-6 h-6 text-gray-400 pointer-events-none" />
              </div>
              {errors.dateOfBirth && <p className={errorClass}>{errors.dateOfBirth}</p>}
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={inputClass}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className={inputClass}
              />
              {errors.phoneNumber && <p className={errorClass}>{errors.phoneNumber}</p>}
            </div>

            <div>
              <label className={labelClass}>Sports</label>
              <div className="relative">
                <select
                  value={formData.sports}
                  onChange={(e) => handleInputChange('sports', e.target.value)}
                  className={selectClass}
                >
                  <option value="">e.g., Football, Tennis</option>
                  <option value="football">Football</option>
                  <option value="tennis">Tennis</option>
                  <option value="basketball">Basketball</option>
                  <option value="soccer">Soccer</option>
                  <option value="swimming">Swimming</option>
                  <option value="athletics">Athletics</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-3.5 w-6 h-6 text-gray-400 pointer-events-none" />
              </div>
              {errors.sports && <p className={errorClass}>{errors.sports}</p>}
            </div>

            <div>
              <label className={labelClass}>Sports Club</label>
              <input
                type="text"
                placeholder="e.g., Malmö FF"
                value={formData.sportsClub}
                onChange={(e) => handleInputChange('sportsClub', e.target.value)}
                className={inputClass}
              />
              {errors.sportsClub && <p className={errorClass}>{errors.sportsClub}</p>}
            </div>

            <div>
              <label className={labelClass}>Position</label>
              <input
                type="text"
                placeholder="e.g., Striker, Goalkeeper"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Training Goals</label>
              <div className="relative">
                <select
                  value={formData.trainingGoals}
                  onChange={(e) => handleInputChange('trainingGoals', e.target.value)}
                  className={selectClass}
                >
                  <option value="">e.g., Improve speed, Build strength</option>
                  <option value="improve_speed">Improve Speed</option>
                  <option value="build_strength">Build Strength</option>
                  <option value="endurance">Improve Endurance</option>
                  <option value="flexibility">Increase Flexibility</option>
                  <option value="technique">Improve Technique</option>
                  <option value="general_fitness">General Fitness</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-3.5 w-6 h-6 text-gray-400 pointer-events-none" />
              </div>
              {errors.trainingGoals && <p className={errorClass}>{errors.trainingGoals}</p>}
            </div>

            <div>
              <label className={labelClass}>Preferred Training Days</label>
              <div className="relative">
                <select
                  value={formData.preferredTrainingDays}
                  onChange={(e) => handleInputChange('preferredTrainingDays', e.target.value)}
                  className={selectClass}
                >
                  <option value="">e.g., Mon, Wed, Fri</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                  <option value="flexible">Flexible</option>
                </select>
                <ChevronDown className="absolute right-4 top-3.5 w-6 h-6 text-gray-400 pointer-events-none" />
              </div>
              {errors.preferredTrainingDays && <p className={errorClass}>{errors.preferredTrainingDays}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Additional Message</label>
            <textarea
              placeholder="Any additional information"
              value={formData.additionalMessage}
              onChange={(e) => handleInputChange('additionalMessage', e.target.value)}
              rows={4}
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="flex flex-col gap-3 justify-end md:space-x-4 pt-4 md:flex-row md:gap-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-8 py-3 border-2 order-2 border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400 hover:text-white transition-colors rounded-none font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 order-1 bg-blue-400 text-white hover:bg-blue-500 transition-colors flex items-center justify-center space-x-2 rounded-none font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
        {submitStatus === 'success' && (
          <p className="text-center text-green-600 mt-4">
            ✅ Your booking request has been submitted successfully!
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-center text-red-600 mt-4">
            ❌ An error occurred. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
}
