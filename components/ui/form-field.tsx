"use client";
type FormFieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

export function FormField({ label, required, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-gray-800">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
    </div>
  );
}
