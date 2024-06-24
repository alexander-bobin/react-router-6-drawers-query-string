import DrawerHeader from "../DrawerHeader"
import TextWithNewLines from "../TextWithNewLines"

function CommentsDrawerContent ({ comments }) {
  return (
    <>
      <DrawerHeader title="Comments" />
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="mt-6">
            <p><TextWithNewLines text={comment.body} /></p>
            <p className="italic text-zinc-400">Name: {comment.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CommentsDrawerContent
