async function fetchData(params: { id: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: 'no-store' },
  );
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);
  console.log('SSR:data', data);

  return (
    <div className="space-y-4">
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1 className="text-2xl font-medium text-gray-200">{data.title}</h1>
      <p className="font-medium text-gray-500">{data.body}</p>
    </div>
  );
}
