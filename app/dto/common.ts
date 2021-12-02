import { IsInt, IsOptional, Min } from 'class-validator';
import { Expose } from 'class-transformer';

export class PagePostDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  @Expose()
  limit: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Expose()
  page: number;
}

export class PageGetDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  @Expose()
  limit: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Expose()
  page: number;
}
