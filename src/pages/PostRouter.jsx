import React from "react";
import { useParams } from "react-router";

function PostRouter() {
  const params = useParams();
  return (
    <div>
      <h2>
        from url: {params.id} | name: {params.name}
      </h2>
    </div>
  );
}

export default PostRouter;
