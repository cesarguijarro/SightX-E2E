import { Selector } from 'testcafe';

export default function XPathSelector(xpath) {
    return Selector(() => {
        const iterator = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.ORDERED_NODE_ITERATOR_TYPE,
            null
        );
        const items = [];
        let item = iterator.iterateNext();
        while (item) {
            items.push(item);
            item = iterator.iterateNext();
        }
        return items;
    }, { dependencies: { xpath } }); // 👈 This line is critical
}
