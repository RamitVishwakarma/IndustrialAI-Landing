import Image from "next/image";
import { dataProps } from "./data";

const TeamContainer = ({ data }: { data: dataProps }) => {
  return (
    <>
      <div className="tracking-[-0.0125rem] p-10 bg-slate-50 rounded-3xl ">
        <div className="flex flex-col gap-4">
          <div
            className={`${data.avatarColor} relative w-16 h-16 rounded-full`}>
            <Image
              className="absolute rounded-full w-16 h-16"
              src={data.avatar}
              alt="avatar"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-medium text-base text-slate-950 leading-6 ">
              {data.name}
            </div>
            <div className="text-slate-500 leading-6">{data.designation}</div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="text-slate-950 text-xl leading-8 tracking-[-0.01875rem] pt-10">
          {/* {data.description} */}
        </div>
      </div>
    </>
  );
};

export default TeamContainer;
