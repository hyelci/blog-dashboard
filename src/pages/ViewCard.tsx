import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPost } from "../features/posts/postsSlice";

const ViewCard = () => {
  const { selectedPost } = useAppSelector((store) => store.postsSlice);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id as string));
  }, [id]);

  console.log(selectedPost);

  return (
    <div>
      <h1>{selectedPost?.title}</h1>
      <img src={selectedPost?.coverMedia?.image.url} alt="" />
      <p>{selectedPost?.content.blocks[0].text}</p>
    </div>
  );
};

export default ViewCard;
