import { remark } from 'remark'
import remarkHtml from 'remark-html'

function convert(content) {
  remark()
    .use(remarkHtml)
    .process(content)
    .then((file) => {
      console.log(String(file))
    })
}

export default convert
