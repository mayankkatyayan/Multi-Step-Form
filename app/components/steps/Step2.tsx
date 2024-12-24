'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useFormStore } from '../../store/formStore';
import { useState, useEffect } from 'react';

export default function Step2() {
  const { stepData, updateStepData } = useFormStore();
  const [formValues, setFormValues] = useState(stepData.address);
  const [errors, setErrors] = useState<{ street?: string; city?: string }>({});

  useEffect(() => {
    updateStepData('address', formValues);
  }, [formValues, updateStepData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const newErrors: { street?: string; city?: string } = {};
    if (!formValues.street.trim()) {
      newErrors.street = 'Street Address is required';
    }
    if (!formValues.city.trim()) {
      newErrors.city = 'City is required';
    }
    setErrors(newErrors);
  };

  // Validate form whenever formValues change
  useEffect(() => {
    validate();
  }, [formValues]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Address Details</h2>
      <form className="space-y-4" onSubmit={(e) => {
    e.preventDefault(); 
  }} >
        <div>
          <label className="block text-sm font-medium">Street Address</label>
          <Tooltip>
            <TooltipTrigger>
              <input
                name="street"
                type="text"
                value={formValues.street}
                onChange={handleChange}
                placeholder="Enter your street address"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </TooltipTrigger>
            <TooltipContent>Provide the full street address where you currently reside.</TooltipContent>
          </Tooltip>
          {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">City</label>
          <Tooltip>
            <TooltipTrigger>
              <input
                name="city"
                type="text"
                value={formValues.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </TooltipTrigger>
            <TooltipContent>Specify the city where you live.</TooltipContent>
          </Tooltip>
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
      </form>
    </div>
  );
}
