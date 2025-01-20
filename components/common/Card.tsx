interface CardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

export function Card({ title, value, icon }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        {icon && <div className="text-2xl">{icon}</div>}
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-3xl font-semibold text-gray-700 dark:text-gray-300">
        {value}
      </p>
    </div>
  );
} 