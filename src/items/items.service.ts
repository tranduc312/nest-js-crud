import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    private items: Item[] = [];

    create(item: Item) {
        this.items.push(item);
        return item;
    }

    createMany(items: Item[]) {
        // items.forEach(item => {
        //     this.items.push(item);
        // });

        // this.items.concat(items);

        this.items.push(...items);
        // return this.items;
    }

    findAll() {
        return this.items;
    }

    findOne(id: number) {
        return this.items.find(item => item.id === Number(id));
    }

    update(id: number, newItem: Item) {
        const index = this.items.findIndex(item => item.id === Number(id));
        if (index === -1) {
            return null;
        }
        this.items[index] = newItem;
        return newItem;
    }

    remove(id: number) {
        const index = this.items.findIndex(item => item.id === Number(id));
        if (index === -1) {
            return null;
        }
        const [item] = this.items.splice(index, 1);
        return item;
    }

    clear() {
        this.items = [];
    }
}
