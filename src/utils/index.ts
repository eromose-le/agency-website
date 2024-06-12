/**
 * Filters an array of objects based on the provided parameters and returns the first matching item.
 * @param data - The array of objects to be filtered.
 * @param params - The parameters to filter by (key-value pairs).
 * @return The first matching item or null if no match is found.
 */
export function filterData<T extends Record<string, any>>(
  data: T[],
  params: Partial<T>
): T | null {
  return (
    data.find((item) =>
      Object.entries(params).every(([key, value]) => item[key] === value)
    ) || null
  );
}
