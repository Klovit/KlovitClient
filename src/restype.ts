import config from './config';

let restype;

if (config.resource_type === 'MB' || config.resource_type === 'GB') {
    restype = `${config.resource_type}(s)`
} else {
  console.error('Unsupported Resource type');
}


export default {restype};
