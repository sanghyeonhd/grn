
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { useToast } from "@/components/ui/use-toast";

export const startScan = async () => {
  try {
    // 카메라 권한 체크
    const status = await BarcodeScanner.checkPermission({ force: true });
    
    if (status.granted) {
      // 스캔 시작
      const result = await BarcodeScanner.startScan();
      
      if (result.hasContent) {
        return result.content;
      }
      return null;
    }
    
    return null;
  } catch (error) {
    console.error('QR 스캔 에러:', error);
    throw error;
  }
};

export const stopScan = async () => {
  await BarcodeScanner.stopScan();
};

export const openCamera = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    console.log('캡처된 이미지:', image.webPath);
    return image;
  } catch (error) {
    console.error('카메라 에러:', error);
    throw error;
  }
};
