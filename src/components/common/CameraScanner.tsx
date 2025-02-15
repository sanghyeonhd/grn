
import { Camera, CameraResultType } from '@capacitor/camera';

export const openCamera = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: 'CAMERA'
    });

    // 여기서 이미지 처리 로직을 추가할 수 있습니다
    console.log('캡처된 이미지:', image.webPath);
    return image;
  } catch (error) {
    console.error('카메라 에러:', error);
    throw error;
  }
};
