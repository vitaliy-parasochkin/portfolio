export default function Footer() {
  const date = new Date();

  return (
    <footer className="bg-gray-900 flex justify-center items-center p-2 text-xs ">
      &copy; {date.getFullYear()} Vitalii Parasochkin. All rights reserved.
    </footer>
  );
}
