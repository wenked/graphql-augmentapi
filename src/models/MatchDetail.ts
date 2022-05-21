import { Field, ObjectType, ID } from "type-graphql";
import { Info } from "./Info";
import { Metadata } from "./Metadata";

@ObjectType()
export class MatchDetail {
	@Field()
	info: Info;

	@Field()
	metadata: Metadata;
}
