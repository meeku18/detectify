import { Button } from "@/components/ui/button";
import { FileUploader } from "./_component/FileUploader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FileUploader2 } from "./_component/FileUploader2";

export default function upload() {
  return (
    <div className="w-full h-screen pt-6 md:pt-18 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
        <div className="bg-secondary rounded-md p-4">
          <FileUploader />
          <div className="pt-4">
            <Link href="/detection">
              <Button variant="secondary" className="w-full md:w-auto border">
                DETECT
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-secondary rounded-md p-4">
          <FileUploader2 />
          <div className="pt-4">
            <Link href="/detection">
              <Button variant="secondary" className="w-full md:w-auto border">
                DETECT
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-muted-foreground mt-8 w-full max-w-2xl px-4">
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
              Yes. It comes with default styles that match the other components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
