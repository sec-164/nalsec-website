export const ContactForm = () => {
  return (
    <div className="mt-[-20px] w-full bg-black/20 py-32 px-[20px] text-white backdrop-blur">
      <h1 className="mb-8 text-center text-2xl">カタログ請求</h1>
      <form className="mx-auto max-w-[600px] space-y-4">
        <label className="flex flex-col">
          <span className="flex p-1">
            お名前<sup className="top-[-.25em] text-xl">*</sup>
          </span>
          <input className="rounded-sm border-[.5px] border-white/80 bg-black/40 px-2 py-1 font-sans" />
        </label>
        <label className="flex flex-col">
          <span className="flex p-1">
            メールアドレス<sup className="top-[-.25em] text-xl">*</sup>
          </span>
          <input className="rounded-sm border-[.5px] border-white/80 bg-black/40 px-2 py-1 font-sans" />
        </label>
        <label className="flex flex-col">
          <span className="flex p-1">
            電話番号<sup className="top-[-.25em] text-xl">*</sup>
          </span>
          <input className="rounded-sm border-[.5px] border-white/80 bg-black/40 px-2 py-1 font-sans" />
        </label>
        <label className="flex flex-col">
          <span className="flex p-1">備考</span>
          <textarea className="min-h-[8em] rounded-sm border-[.5px] border-white/80 bg-black/40 px-2 py-1 font-sans" />
        </label>
        <div className="py-4">
          <button className="mx-auto mt-8 block rounded border bg-white/20 px-4 py-2">
            送信
          </button>
        </div>
      </form>
    </div>
  );
};
