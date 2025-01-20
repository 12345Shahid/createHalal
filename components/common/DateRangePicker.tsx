// /components/common/DateRangePicker.tsx
// Component for selecting date ranges

interface DateRange {
  start: Date;
  end: Date;
}

interface DateRangePickerProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
  minDate?: Date;
  maxDate?: Date;
}

export function DateRangePicker({
  value,
  onChange,
  minDate,
  maxDate,
}: DateRangePickerProps) {
  return (
    <div className="flex space-x-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={value.start.toISOString().split('T')[0]}
          min={minDate?.toISOString().split('T')[0]}
          max={maxDate?.toISOString().split('T')[0]}
          onChange={(e) =>
            onChange({ ...value, start: new Date(e.target.value) })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={value.end.toISOString().split('T')[0]}
          min={value.start.toISOString().split('T')[0]}
          max={maxDate?.toISOString().split('T')[0]}
          onChange={(e) =>
            onChange({ ...value, end: new Date(e.target.value) })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
    </div>
  );
} 