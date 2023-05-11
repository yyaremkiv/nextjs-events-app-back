import { Injectable } from '@nestjs/common';
import { storage } from '../config/cloudConfig.js';
import { cloudConfig } from '../config/cloudConfig.js';
const bucketName = process.env.STORAGE_BUCKET_NAME;

@Injectable()
export class CloudService {
  async addFileCloud(respFile: any): Promise<string> {
    const fileName = `${Date.now()}-${respFile.originalname}`;
    const file = storage.bucket(bucketName).file(fileName);
    await file.save(respFile.buffer, {
      metadata: {
        contentType: respFile.mimetype,
      },
    });
    const publicUrl = cloudConfig.publicImagePath(bucketName, fileName);
    return publicUrl;
  }

  async deleteFileCloud(fileName: string): Promise<void> {
    const fileCloudName = cloudConfig.publicToPrivatePath(fileName);
    console.log('fileCloudName', fileCloudName);
    const file = storage.bucket(bucketName).file(fileCloudName);
    await file.delete();
  }
}
