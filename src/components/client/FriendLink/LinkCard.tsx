"use client";
export default function LinkCard(props: any) {
  const { link, avatar_url, intro, name } = props;

  return (
    <article className="min-w-[300px]  p-4 rounded-lg shadow-md bg-white hover:border-blue-600 border-2 hover:shadow-sm transition-all duration-300 ease-in-out">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex  items-center justify-around"
      >
        <div className="w-[90px] h-[90px]  relative">
          <img src={avatar_url} alt="avatar" className="rounded-full" />
          <div className="bg-green-500 border-white border-4 rounded-full w-[20px] h-[20px] absolute bottom-[0px] right-[0px]"></div>
        </div>
        <div className="w-[200px] text-center text-gray-600 font-medium p-2">
          <span className="text-lg font-bold">{name}</span>
          <div className="text-sm">{intro}</div>
        </div>
      </a>
    </article>
  );
}
