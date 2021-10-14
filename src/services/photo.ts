import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { v4 as uuid } from 'uuid'

import { firebaseStorage } from './firebase'

type PhotoProps = {
  name: string
  url: string
}

export const getAllPhotos = async (): Promise<PhotoProps[]> => {
  const list: PhotoProps[] = []
  const imagesFolder = ref(firebaseStorage, 'images')
  const listPhoto = await listAll(imagesFolder)

  for (const i in listPhoto.items) {
    const photoUrl = await getDownloadURL(listPhoto.items[i])

    list.push({
      name: listPhoto.items[i].name,
      url: photoUrl
    })
  }

  return list
}

export const insertPhoto = async (file: File): Promise<PhotoProps> => {
  if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    const imageName = uuid()
    const newFile = ref(firebaseStorage, `images/${imageName}`)
    const upload = await uploadBytes(newFile, file)
    const photoUrl = await getDownloadURL(upload.ref)

    return {
      name: upload.ref.name,
      url: photoUrl
    }
  } else {
    throw new Error('Tipo de arquivo não permitido')
  }
}
