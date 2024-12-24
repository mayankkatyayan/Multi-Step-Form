'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { validateEmail, validateRequired } from '@/app/utils/validation';
import { useFormStore } from '../../store/formStore';
import { useState, useEffect } from 'react';

export default function Step1() {
  const { stepData, updateStepData } = useFormStore();
  const [formValues, setFormValues] = useState(stepData.personalInfo);

  useEffect(() => {
    updateStepData('personalInfo', formValues);
  }, [formValues, updateStepData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { fullName?: string; email?: string } = {};
    if (!validateRequired(formValues.fullName)) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!validateEmail(formValues.email)) {
      newErrors.email = 'Invalid email address';
    }
    setErrors(newErrors);
  };
  
  useEffect(() => {
    validate();
  }, [formValues]);


  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg dark:bg-neutral-900">
      <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Personal Information</h2>
      <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
        }} >
        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-neutral-200 mb-2">Full Name</label>
          <Tooltip>
            <TooltipTrigger>
            <input
                name="fullName"
                type="text"
                value={formValues.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
              />
            </TooltipTrigger>
            <TooltipContent>Provide your complete name as it appears on official documents.</TooltipContent>
          </Tooltip>
           {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-neutral-200 mb-2">Email Address</label>
          <Tooltip>
            <TooltipTrigger>
              <input
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
              />
            </TooltipTrigger>
            <TooltipContent>Ensure this is a valid email you check frequently.</TooltipContent>
          </Tooltip>
           {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>
      </form>
    </div>
  );
}
