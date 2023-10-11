import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import {Item} from './item.entity';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}

    @Get()
    findAll() {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() item: Item) {
        return this.itemService.create(item);
    }

    @Post('createMany')
    createWithList(@Body() items: Item[]) {
        return this.itemService.createMany(items);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() newItem: Item) {
        return this.itemService.update(id, newItem);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.itemService.remove(id);
    }

    @Delete()
    clear()  {
        return this.itemService.clear();
    }
}
