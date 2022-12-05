import app from 'flarum/admin/app';
import Tag from '../common/models/Tag';
import addTagsPermissionScope from './addTagsPermissionScope';
import addTagPermission from './addTagPermission';
import addTagsHomePageOption from './addTagsHomePageOption';
import addTagChangePermission from './addTagChangePermission';
import TagsPage from './components/TagsPage';

app.initializers.add('flarum-tags', (app) => {
  app.store.models.tags = Tag;

  const extData = app.extensionData.for('flarum-tags').registerPage(TagsPage);

  if (app.initializers.has('flarum-mentions')) {
    extData.registerPermission(
      {
        permission: 'mentionTags',
        label: app.translator.trans('flarum-tags.admin.permissions.mention_tags_label'),
        icon: 'fas fa-at',
      },
      'start'
    );
  }

  addTagsPermissionScope();
  addTagPermission();
  addTagsHomePageOption();
  addTagChangePermission();
});

// Expose compat API
import tagsCompat from './compat';
import { compat } from '@flarum/core/admin';

Object.assign(compat, tagsCompat);
