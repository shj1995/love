import { AbstractEntity } from './abstractEntity';

export class Record extends AbstractEntity {
    private title: string;

	private date: Date;

	private description: string;

	public getTitle(): string {
		return this.title;
	}

	public setTitle(title: string): void {
		this.title = title;
	}

	public getDate():Date {
		return this.date;
	}

	public setDate(date: Date): void {
		this.date = date;
	}

	public getDescription(): string {
		return this.description;
	}

	public setDescription(description: string): void {
		this.description = description;
	}

};
