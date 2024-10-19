import SecondaryHeader from "@/components/header/SecondaryHeader";

export default function OtherPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryHeader />
      {children}
    </>
  );
}
