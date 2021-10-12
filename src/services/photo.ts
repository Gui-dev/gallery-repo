import { ref, listAll, getDownloadURL } from 'firebase/storage'

import { firebaseStorage } from './firebase'

type PhotoProps = {
  name: string
  url: string
}

export const getAll = async () => {
  const list: PhotoProps[] = []
  const imagesFolder = ref(firebaseStorage, 'images')
  const listPhoto = await listAll(imagesFolder)

  listPhoto.items.map(async (photo) => {
    const photoUrl = await getDownloadURL(photo)
    return list.push({
      name: photo.name,
      url: photoUrl
    })
  })

  return list
}
