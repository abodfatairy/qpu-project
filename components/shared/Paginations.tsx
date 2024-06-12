"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  dataLength: number;
}

const Paginations = ({
  hasNextPage,
  hasPrevPage,
  dataLength,
}: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";
  const SearchI = searchParams.get("search") ?? "";
  const bzArr = Array(Math.ceil(dataLength / Number(per_page))).fill(0);

  const Router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              disabled={!hasPrevPage}
              onClick={() => {
                router.push(
                  `/products/?page=${Number(page) - 1}&per_page=${per_page}`
                );
              }}
            >
              prev
            </Button>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>
              {page} - {Math.ceil(dataLength / Number(per_page))}
            </PaginationLink>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <Button
              disabled={!hasNextPage}
              onClick={() => {
                router.push(
                  `/products/?page=${Number(page) + 1}&per_page=${per_page}`
                );
              }}
            >
              {" "}
              next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Paginations;
