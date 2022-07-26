<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

class ArrayExport implements FromCollection, WithStyles, WithColumnWidths, WithEvents
{
    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return collect($this->data);
    }

    /**
     * @return array
     */
    public function columnWidths(): array
    {
        return [
            'A' => 20,
            'B' => 20,
            'C' => 20,
            'D' => 25,
            'E' => 40,
            'F' => 15,
            'G' => 15,
            'H' => 15,
        ];
    }

    /**
     * @return array
     */
    public function styles(Worksheet $sheet){
        return [
            'A1:Z1' => [
                'font' => ['bold' => true,'color' =>['argb' => 'FFFFFFFF'] ],
                'fill'=> [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'startColor' => ['argb' => 'FF000000']
                ]
            ],
        ];
    }
    
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class    => function(AfterSheet $event) {
   
                $event->sheet->getDelegate()->getStyle('A1:Z1')
                                ->getAlignment()
                                ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
            },
        ];
    }
}