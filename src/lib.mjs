import { remark } from 'remark'
import remarkHtml from 'remark-html'

function convert(content) {
  return remark()
    .use(remarkHtml)
    .process(content)
}

export default convert
