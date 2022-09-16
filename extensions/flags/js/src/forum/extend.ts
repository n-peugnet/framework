import Extend from 'flarum/common/extenders';
import Post from 'flarum/common/models/Post';
import FlagsPage from './components/FlagsPage';
import Flag from './models/Flag';

export default [
  new Extend.Routes().add('flags', '/flags', FlagsPage),

  new Extend.Model(Flag).register('flags'),

  new Extend.Model(Post).hasMany<Flag>('flags').attribute<boolean>('canFlag'),
];
