import Hello from "@/app/Components/Hello";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Hello name="World" age={23} />
    </div>
  );
}
