import axios from 'axios';

const uploadFormData = async (formData) => {
  const formDataCopy = { ...formData };
  await Promise.all(
    Object.keys(formDataCopy).map(async (field) => {
      if (
        Object.prototype.isPrototypeOf.call(File.prototype, formDataCopy[field])
      ) {
        const dt = new FormData();
        dt.append('file', formDataCopy[field]);
        dt.append('upload_preset', 'vs8gsai6');
        dt.append('cloud_name', 'danyel117');
        const options = {
          method: 'POST',
          url: 'http://localhost:4000/graphql',
          data: dt,
        };
        await axios.request(options).then((response) => {
          formDataCopy[field] = response.data.url;
        });
      }
    })
  );
  return formDataCopy;
};

export { uploadFormData };
