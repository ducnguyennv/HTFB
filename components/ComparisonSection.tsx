import React, { useMemo } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import ContactButton from './ContactButton'

export default function ComparisonSection() {
  const competitorComparison = useMemo(() => [
    { feature: "Tỷ lệ thành công", us: "99%", competitor: "40%" },
    { feature: "Thời gian phản hồi", us: "1-5 phút", competitor: "24-48 giờ" },
    { feature: "Hỗ trợ 24/7", us: "Có", competitor: "Không" },
    { feature: "Bảo mật thông tin", us: "Tuyệt đối", competitor: "Hạn chế" },
    { feature: "Giá cả", us: "Rẻ nhất thị trường", competitor: "Chặt chém" },
    { feature: "Bảo hành sau khôi phục", us: "30-90 ngày", competitor: "Không có" },
  ], []);

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">So Sánh Với Đối Thủ</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Tính năng</TableHead>
              <TableHead className="w-1/3">Chúng tôi</TableHead>
              <TableHead className="w-1/3">Đối thủ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {competitorComparison.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.feature}</TableCell>
                <TableCell className="text-green-600 font-semibold">{item.us}</TableCell>
                <TableCell className="text-red-600">{item.competitor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Chọn dịch vụ của chúng tôi để được trải nghiệm sự khác biệt!
          </p>
          <ContactButton />
        </div>
      </div>
    </section>
  )
}