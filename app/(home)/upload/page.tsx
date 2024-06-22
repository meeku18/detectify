import { Button } from "@/components/ui/button";
import { FileUploader } from "./_component/FileUploader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function upload() {
  return (
    <div className="w-full h-screen pt-6 md:pt-18">
      <div className="rounded-md  text-primary bg-secondary">
        <FileUploader />
      </div>
      <div className="pt-4 pl-2">
        <Link href="/detection">
          <Button variant={"secondary"} className="border">
            DETECT
          </Button>
        </Link>
      </div>
      <div className="text-muted-foreground mt-8 pl-4 w-[400px]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Should video be in MP3 format?</AccordionTrigger>
            <AccordionContent>
              Yes. Currently our model supports mp3 format
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
