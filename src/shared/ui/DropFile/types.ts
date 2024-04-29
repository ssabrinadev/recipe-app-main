export type TPreview = {
  preview: string | ArrayBuffer | null | undefined
  name: string
  size: number
  type: string
}

export type TDropFileProps = {
  preview?: string | ArrayBuffer | null | undefined
  onChange: (file: File) => void
}
