export function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
      <footer>my footer</footer>
    </main>
  );
}
