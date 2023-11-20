"use client";

import Error from "../../Components/ui/Error";
import { useGetVideoQuery } from "../features/api/apiSlice";
import Form from "./Form";

export default function EditVideo({ id }) {
  console.log(id);
  const { data: video, isLoading, isError } = useGetVideoQuery(id);
  console.log(video);
  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && video?._id) {
    content = <Form video={video} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Edit video
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Please fillup the form to edit video
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">{content}</div>
      </div>
    </div>
  );
}
