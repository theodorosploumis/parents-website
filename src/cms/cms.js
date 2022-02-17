import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('priorities', AboutPagePreview)
CMS.registerPreviewTemplate('sponsors', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
