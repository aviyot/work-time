import { user } from "./prismclent";

export default async function Home() {
  const data = await user();
  return (
    <main>
      <div>
        <h2>USERS</h2>
        {data.map((item) => {
          return (
            <div className="flex gap-2" key={item.id}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.createdAt.toDateString()}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
