import {useRouter} from "next/router";

export default () => {
  const router = useRouter()

  return (
    <>
      <h1>post</h1>
      <p>postId: {router.query.id}</p>
    </>
  )
}