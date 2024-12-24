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
    <div>
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
        }} >
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <Tooltip>
            <TooltipTrigger>
            <input
                name="fullName"
                type="text"
                value={formValues.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </TooltipTrigger>
            <TooltipContent>Provide your complete name as it appears on official documents.</TooltipContent>
          </Tooltip>
           {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <Tooltip>
            <TooltipTrigger>
              <input
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </TooltipTrigger>
            <TooltipContent>Ensure this is a valid email you check frequently.</TooltipContent>
          </Tooltip>
           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
      </form>
    </div>
  );
}
