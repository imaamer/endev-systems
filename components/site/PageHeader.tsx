export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="py-10 bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-gray-600 text-lg mt-4">{subtitle}</p>}
      </div>
    </div>
  );
}
