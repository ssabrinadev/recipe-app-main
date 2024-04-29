import { FC, useEffect, useState } from "react"
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react"
import { lightRedTheme, schema } from "../.."
import { TPostRecipe } from "."
import { Button, DropFile, Input, useAuth } from "@/shared"
import { useNavigate } from "react-router-dom"


export const PostRecipeUI: FC<TPostRecipe> = ({ data, loading, onPublic }) => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [title, setTile] = useState<string>('Мой новый рецепт')
  const [file, setFile] = useState<File>()
  const [html, setHtml] = useState<string>('')
  const editor = useCreateBlockNote({
    schema,
  })

  const onChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document)
    setHtml(html)
  }

  const handlePublic = () => {
    onPublic({
      name: title,
      description: html,
      user_id: user?.data?.id || 0,
      createdAt: new Date(),
      file,
    })
  }

  useEffect(() => {
    async function loadInitialHTML() {
      const blocks = await editor.tryParseHTMLToBlocks(data?.description || '');
      setTile(data?.name || '')
      editor.replaceBlocks(editor.document, blocks);
    }
    loadInitialHTML();
  }, [data?.description]);

  return (
    <div className="overflow-hidden relative h-dvh">
      <div className="px-12">
        <Input
          className="bg-transparent border-none px-[54px] font-bold !text-[3rem] placeholder:text-[#bcbcbc]"
          placeholder="Мой новый рецепт"
          value={title}
          onChange={e => setTile(e.target.value)}
        />
        <DropFile onChange={setFile} preview={data?.imgPath} />
        <BlockNoteView editor={editor} theme={lightRedTheme} imageToolbar={false} onChange={onChange} className="h-full" />
      </div>
      <div className="absolute top-3 right-10 ">
        <Button onClick={() => handlePublic()} disabled={loading}>
          {loading ? 'Публикуем ...' : 'Опубликовать'}
        </Button>
      </div>
      <div className="absolute top-3 left-0">
        <Button variant="outline" onClick={() => navigate(-1)} disabled={loading}>{'<'}</Button>
      </div>
    </div>
  )
}
