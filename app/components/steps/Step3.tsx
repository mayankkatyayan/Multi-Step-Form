'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useFormStore } from '../../store/formStore';
import { useState, useEffect } from 'react';

export default function Step3() {
  const { stepData, updateStepData } = useFormStore();
  const [formValues, setFormValues] = useState(stepData.preferences);

  useEffect(() => {
    updateStepData('preferences', formValues);
  }, [formValues, updateStepData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Preferences</h2>
      <form className="space-y-4" onSubmit={(e) => {
    e.preventDefault();
  }} >
        <div>
        <Tooltip>
            <TooltipTrigger>
              <label className="flex items-center space-x-2">
                <input
                  name="newsletter"
                  type="checkbox"
                  checked={formValues.newsletter}
                  onChange={handleChange}
                  className="rounded border-gray-300 shadow-sm focus:ring-blue-500"
                />
                <span>Subscribe to Newsletter</span>
              </label>
            </TooltipTrigger>
            <TooltipContent>Receive our latest updates via email.</TooltipContent>
          </Tooltip>
        </div>
        <div>
        <Tooltip>
            <TooltipTrigger>
              <label className="flex items-center space-x-2">
                <input
                  name="notifications"
                  type="checkbox"
                  checked={formValues.notifications}
                  onChange={handleChange}
                  className="rounded border-gray-300 shadow-sm focus:ring-blue-500"
                />
                <span>Enable Notifications</span>
              </label>
            </TooltipTrigger>
            <TooltipContent>Allow notifications for updates and reminders.</TooltipContent>
          </Tooltip>
        </div>
      </form>
    </div>
  );
}
