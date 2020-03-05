import media from '@system.media';

export default function chooseImage(param) {
  if (param === ['camera', 'album'] || param === ['camera']) {
    return new Promise(function(resolve, reject) {
      media.takePhoto({
        success: function(data) {
          resolve(data);
        },
        fail: function(data, code) {
          reject(`handling fail, code = ${code}`);
        },
        complete: function(data) {
          resolve(data);
        }
      });
    });
  } else {
    return new Promise(function(resolve, reject) {
      media.pickImages({
        success: function(data) {
          resolve(data);
        },
        fail: function(data, code) {
          reject(`handling fail, code = ${code}`);
        },
        complete: function(data) {
          resolve(data);
        }
      });
    });
  }
}
