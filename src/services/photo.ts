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

  for (const i in listPhoto.items) {
    const photoUrl = await getDownloadURL(listPhoto.items[i])

    list.push({
      name: listPhoto.items[i].name,
      url: photoUrl
    })
  }

  return list
}
