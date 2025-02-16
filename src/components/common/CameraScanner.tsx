
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { useToast } from "@/components/ui/use-toast";

export const startScan = async () => {
  try {
    const status = await BarcodeScanner.checkPermission({ force: true });
    
    if (status.granted) {
      await BarcodeScanner.hideBackground();
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
  await BarcodeScanner.showBackground();
  await BarcodeScanner.stopScan();
};
